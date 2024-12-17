
"use client"

export default function Home() {
  return (
    <div>
      <Clock />
    </div>
  )
}

function Clock() {
  return <canvas id="clock" width="500" height="500"></canvas>
}