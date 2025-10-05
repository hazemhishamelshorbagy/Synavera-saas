"use client"

import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import { useState } from 'react'
import { Button } from './ui/Button'

export type ScheduledPost = {
  id: string
  title: string
  date: string // ISO date
}

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getMonthGrid(date: Date) {
  const start = new Date(date.getFullYear(), date.getMonth(), 1)
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const startDay = start.getDay()
  const days = end.getDate()
  const cells = [] as { date: Date }[]
  for (let i = 0; i < startDay; i++) cells.push({ date: new Date(start.getTime() - (startDay - i) * 86400000) })
  for (let d = 1; d <= days; d++) cells.push({ date: new Date(date.getFullYear(), date.getMonth(), d) })
  while (cells.length % 7 !== 0) cells.push({ date: new Date(end.getTime() + (cells.length % 7) * 86400000) })
  return cells
}

export function CalendarScheduler({ initialPosts }: { initialPosts: ScheduledPost[] }) {
  const [current, setCurrent] = useState(new Date())
  const [posts, setPosts] = useState(initialPosts)

  const grid = getMonthGrid(current)

  function onDragEnd(result: DropResult) {
    const { draggableId, destination } = result
    if (!destination) return
    const dayIndex = Number(destination.droppableId.replace('day-', ''))
    const cellDate = grid[dayIndex].date
    setPosts(prev => prev.map(p => p.id === draggableId ? { ...p, date: cellDate.toISOString() } : p))
  }

  function prevMonth() {
    const d = new Date(current)
    d.setMonth(d.getMonth() - 1)
    setCurrent(d)
  }

  function nextMonth() {
    const d = new Date(current)
    d.setMonth(d.getMonth() + 1)
    setCurrent(d)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="text-lg font-semibold">{current.toLocaleString(undefined, { month: 'long', year: 'numeric' })}</div>
        <div className="flex gap-2">
          <Button className="bg-slate-200 text-slate-900 hover:bg-slate-300" onClick={prevMonth}>Prev</Button>
          <Button onClick={nextMonth}>Next</Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs text-slate-500">
        {weekdays.map(d => <div key={d}>{d}</div>)}
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-7 gap-2">
          {grid.map((cell, idx) => (
            <Droppable droppableId={`day-${idx}`} key={idx}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="min-h-[110px] rounded-lg border bg-white p-2"
                >
                  <div className="text-xs text-slate-500 mb-1">{cell.date.getDate()}</div>
                  {posts.filter(p => new Date(p.date).toDateString() === cell.date.toDateString()).map((p, i) => (
                    <Draggable draggableId={p.id} index={i} key={p.id}>
                      {(dragProps) => (
                        <div
                          ref={dragProps.innerRef}
                          {...dragProps.draggableProps}
                          {...dragProps.dragHandleProps}
                          className="mb-1 rounded bg-brand/10 px-2 py-1 text-xs"
                        >
                          {p.title}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}
