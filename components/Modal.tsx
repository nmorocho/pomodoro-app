import { roboto, robotoCondensed } from "@/fonts";

export default function Modal({ title, isVisible, toggleVisiblity }: { title:string, isVisible: boolean, toggleVisiblity: Function }) {
  if (!isVisible) return <></>

  return (
    <div className="w-full h-4/5 fixed top-0 left-0 bg-transparent flex items-center justify-center">
      <div className="w-[500px] min-h-28 bg-zinc-50 border-zinc-500 border py-2 px-3">
        <p className={`${roboto.className} text-lg font-medium pb-2`}>{title}</p>
        <input type="text" className="bg-zinc-50 border-zinc-500 border h-8 text-md focus:outline-0 w-full mb-5 px-2"/>
        <div className="flex flex-row gap-3">
          <button className={`${robotoCondensed.className} bg-zinc-700 text-zinc-50 h-8 w-24`}>Save</button>
          <button className={`${robotoCondensed.className} bg-zinc-700 text-zinc-50 h-8 w-24`} onClick={() => toggleVisiblity(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
