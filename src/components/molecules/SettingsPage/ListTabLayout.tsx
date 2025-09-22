'use client'
import { TabsList, TabsTrigger } from '@radix-ui/react-tabs'

export default function ListTabLayout() {
  return (
    <TabsList className="bg-gray-100 p-2 w-fit flex gap-3 rounded-xl">
      <TabsTrigger
        className=" rounded-md py-1 px-3 data-[state=active]:bg-white"
        value="menu-groups"
      >
        Menu Groups
      </TabsTrigger>
      <TabsTrigger
        className=" rounded-md py-1 px-3 data-[state=active]:bg-white"
        value="menus"
      >
        Menu Items
      </TabsTrigger>
    </TabsList>
  )
}
