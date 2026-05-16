export default function Footer() {
  return (
    <footer className="py-10 border-t mt-20">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Vanya.dev — Built with Next.js</p>
      </div>
    </footer>
  )
}