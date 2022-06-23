import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen  overflow-x-hidden bg-gray-100 p-5">
      <div className="flex items-center justify-between">
        <div>Hi, Realrlgus</div>
        <div className="aspect-square w-8 rounded-lg bg-cyan-400" />
      </div>
      <div className="my-4 rounded-lg bg-gray-50 p-2">
        <span className="text-sm text-gray-500">Search Here</span>
      </div>
      <div className="text-lg italic">Category</div>
      <div className="flex justify-between py-3">
        <div className="rounded-full border-2 border-slate-500 bg-white p-2 text-sm font-bold">
          Bluetooth
        </div>
        <div className="rounded-full border-2 border-slate-500 bg-gray-100 p-2 text-sm text-gray-500 ">
          wire Speaker
        </div>
        <div className="rounded-full border-2 border-slate-500 bg-gray-100 p-2 text-sm text-gray-500 ">
          Outdoor
        </div>
        <div className="rounded-full border-2 border-slate-500 bg-gray-100 p-2 text-sm text-gray-500 ">
          Home
        </div>
      </div>
      <div className="flex min-w-max flex-nowrap gap-3 overflow-x-scroll">
        <div className="flex h-64 flex-col justify-between rounded-lg bg-white p-3">
          <div className="h-44 bg-slate-200" />
          <div>
            <span>Mini Bluetooth Speaker</span>
            <div className="flex justify-between">
              <span className="text-sm">$250</span>
              <span className="text-sm">⭐️ 4.9</span>
            </div>
          </div>
        </div>
        <div className="flex h-64 flex-col justify-between rounded-lg bg-white p-3">
          <div className="h-44 bg-slate-200" />
          <div>
            <span>Mini Bluetooth Speaker</span>
            <div className="flex justify-between">
              <span className="text-sm">$250</span>
              <span className="text-sm">⭐️ 4.9</span>
            </div>
          </div>
        </div>
        <div className="flex h-64 flex-col justify-between rounded-lg bg-white p-3">
          <div className="h-44 bg-slate-200" />
          <div>
            <span>Mini Bluetooth Speaker</span>
            <div className="flex justify-between">
              <span className="text-sm">$280</span>
              <span className="text-sm">⭐️ 4.9</span>
            </div>
          </div>
        </div>
        <div className="flex h-64 flex-col justify-between rounded-lg bg-white p-3">
          <div className="h-44 bg-slate-200" />
          <div>
            <span>Mini Bluetooth Speaker</span>
            <div className="flex justify-between">
              <span className="text-sm">$250</span>
              <span className="text-sm">⭐️ 4.9</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-lg italic">Category</div>
      <div className="space-y-4">
        <div className="flex items-center gap-5">
          <div className="aspect-square h-16 rounded-xl bg-white" />
          <div className="flex flex-col">
            <span>Outdoor Bluetooth Speaker</span>
            <span>$50</span>
            <span className="text-sm">⭐️ 4.9</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="aspect-square h-16 rounded-xl bg-white" />
          <div className="flex flex-col">
            <span>Outdoor Bluetooth Speaker</span>
            <span>$50</span>
            <span className="text-sm">⭐️ 4.9</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="aspect-square h-16 rounded-xl bg-white" />
          <div className="flex flex-col">
            <span>Outdoor Bluetooth Speaker</span>
            <span>$50</span>
            <span className="text-sm">⭐️ 4.9</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="aspect-square h-16 rounded-xl bg-white" />
          <div className="flex flex-col">
            <span>Outdoor Bluetooth Speaker</span>
            <span>$50</span>
            <span className="text-sm">⭐️ 4.9</span>
          </div>
        </div>
      </div>
      <div className="mb-24" />
      <div className="fixed left-0 bottom-0 flex w-full items-center justify-around rounded-3xl bg-white p-6 pb-8">
        <span className="rounded-xl bg-blue-100 px-3 py-1 font-bold text-indigo-600">
          Home
        </span>
        <span className=" px-3 py-1">Shop</span>
        <span className=" px-3 py-1">Love</span>
        <span className=" px-3 py-1">Info</span>
      </div>
    </div>
  );
};

export default Home;
