'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { IMenuItems } from '@/interfaces/IMenuItems'
import {
  onDeleteMenuItems,
  setIdName,
  setIdNameGroup,
  setIsEdit,
} from '@/lib/features/menuItemsSlice'
import { RootState } from '@/lib/store'
import { Edit2, Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditItemForm from './EditItemForm'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

export default function ListMenuItemsLayout() {
  const dispatch = useDispatch()
  const dataMenuGroup = useSelector(
    (state: RootState) => state.menuGroupReducer.menuGroup
  )
  const isEdit = useSelector(
    (state: RootState) => state.menuItemsReducer.isEdit
  )
  const idName = useSelector((state: RootState) => state.menuItemsReducer.name)
  const idNameGroup = useSelector(
    (state: RootState) => state.menuItemsReducer.nameGroup
  )

  const [selectedFilterName, setSelectedFilterName] = useState('')
  const onEdit = (data: IMenuItems) => {
    dispatch(setIsEdit(true))
    dispatch(setIdName(data.name))
    dispatch(setIdNameGroup(data.nameGroup))
  }

  const menuItems = useSelector(
    (state: RootState) => state.menuItemsReducer.menuItems
  )

  const filteredItems = useMemo(() => {
    if (!selectedFilterName || selectedFilterName === 'all') {
      return menuItems
    }
    return menuItems.filter((item) => item.nameGroup === selectedFilterName)
  }, [menuItems, selectedFilterName])

  const onDelete = (data: IMenuItems) => {
    dispatch(onDeleteMenuItems(data))
  }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Menu Items ({filteredItems.length})
        </h3>
        <Select
          value={selectedFilterName}
          onValueChange={setSelectedFilterName}
        >
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Groups</SelectItem>
            {dataMenuGroup.map((group) => (
              <SelectItem key={group.name} value={group.name}>
                {group.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filteredItems.map((item) => (
          <Card key={`${item.name} + ${item.nameGroup}`}>
            <CardContent className="pt-6">
              {isEdit &&
              item.name === idName &&
              item.nameGroup === idNameGroup ? (
                <EditItemForm
                  items={item}
                  onCancel={() => {
                    dispatch(setIsEdit(false))
                    dispatch(setIdName(''))
                    dispatch(setIdNameGroup(''))
                  }}
                />
              ) : (
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{item.name}</h4>
                      <Badge>{item.nameGroup}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(item)}
                      className="gap-1"
                    >
                      <Edit2 className="h-3 w-3" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onDelete(item)}
                      className="gap-1 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
