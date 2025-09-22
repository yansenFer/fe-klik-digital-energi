'use client'
import EditGroupForm from '@/components/molecules/SettingsPage/EditGroupForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { IMenuGroup } from '@/interfaces/IMenuGroup'
import {
  setIsEdit,
  setIdName,
  onDeleteMenuGroup,
} from '@/lib/features/menuGroupSlice'
import { RootState } from '@/lib/store'
import { Edit2, Trash2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

export default function ListMenuGroupLayout() {
  const dispatch = useDispatch()
  const dataMenuGroup = useSelector(
    (state: RootState) => state.menuGroupReducer.menuGroup
  )
  const isEdit = useSelector(
    (state: RootState) => state.menuGroupReducer.isEdit
  )
  const idName = useSelector((state: RootState) => state.menuGroupReducer.name)

  const onEdit = (data: IMenuGroup) => {
    dispatch(setIsEdit(true))
    dispatch(setIdName(data.name))
  }

  const onDelete = (data: IMenuGroup) => {
    dispatch(onDeleteMenuGroup(data))
  }
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Existing Menu Groups ({dataMenuGroup.length})
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {dataMenuGroup.map((group) => (
          <Card className="h-fit" key={group.name}>
            <CardContent className="pt-6">
              {isEdit && group.name === idName ? (
                <EditGroupForm
                  group={group}
                  onCancel={() => {
                    dispatch(setIsEdit(false))
                    dispatch(setIdName(''))
                  }}
                />
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="font-semibold">{group.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(group)}
                      className="gap-1"
                    >
                      <Edit2 className="h-3 w-3" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onDelete(group)}
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
