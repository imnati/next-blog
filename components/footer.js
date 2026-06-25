export default function Footer() {
  return (
    <footer className="border-t border-zinc-300 bg-zinc-100 px-4 py-6 text-center text-sm text-zinc-600 sm:px-6 sm:py-8">
      &copy; {new Date().getFullYear()} Next Blog. All rights reserved.
    </footer>
  );
}
