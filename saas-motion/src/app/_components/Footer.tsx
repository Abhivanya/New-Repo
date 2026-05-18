export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-16 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">YourSaaS</h3>
          <p className="text-zinc-400">
            Building delightful product experiences.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-zinc-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Roadmap</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-zinc-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-zinc-400">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-zinc-500 mt-12">
        © 2026 YourSaaS. All rights reserved.
      </p>
    </footer>
  );
}
