import {
  CalendarDaysIcon,
  CreditCardIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
const stats = [
  { label: "Transactions every 24 hours", value: "10k lượt đọc" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];
export default function Export() {
  return (
    <div className="lg:col-start-3 lg:row-end-1">
      <div className="bg-gray-50 sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Kết luận?
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Phần-cơ-sở của bài viết này kết luận.</p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              ung-thư
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 lg:flex lg:flex-auto lg:justify-center px-6">
        <dl className="w-64 space-y-8 xl:w-80">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                {stat.label}
              </dt>
              <dd className="text-2xl font-semibold tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
        <a href="#" className="group block flex-shrink-0">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Trần Thuỳ Trang
              </p>
              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
