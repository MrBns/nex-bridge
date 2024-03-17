import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded">
        <ul className="space-y-2">
          <li>
            <Link href={"/admin/create-blog"} className="flex items-center p-2 text-base font-normal text-gray-50 rounded-lg hover:bg-slate-600 ">
              <svg className="w-6 h-6 text-gray-50 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">New Blog</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
