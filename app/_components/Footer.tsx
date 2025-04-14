export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-auto py-8">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Yoonjae Chang
          </p>
          <div className="flex space-x-6">
            <a
              href="mailto:yoonj24k@gmail.com"
              className="text-sm text-white hover:opacity-60 transition-opacity"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 