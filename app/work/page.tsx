export default function Work() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-xl font-bold mb-8">Works</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Architecture</h2>
          <div className="grid grid-cols-1 gap-4">
            // ... existing code ...
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Literary Works</h2>
          <div className="grid grid-cols-1 gap-4">
            // ... existing code ...
          </div>
        </div>
      </div>
    </div>
  )
} 