'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { setMenuItems } from '@/lib/features/menuItemsSlice'
import { RootState } from '@/lib/store'
import { Label } from '@radix-ui/react-label'
import { useFormik } from 'formik'
import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
export default function AddMenuItemsLayout() {
  const dispatch = useDispatch()
  const dataMenuItems = useSelector(
    (state: RootState) => state.menuItemsReducer.menuItems
  )
  const dataMenuGroup = useSelector(
    (state: RootState) => state.menuGroupReducer.menuGroup
  )

  const addItemsSchema = Yup.object().shape({
    nameGroup: Yup.string().required('*Required'),
    name: Yup.string().required('*Required'),
    description: Yup.string().required('*Required'),
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      nameGroup: '',
      description: '',
    },
    validationSchema: addItemsSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const obj = {
        name: values.name,
        nameGroup: values.nameGroup,
        description: values.description,
      }

      const isDuplicate = dataMenuItems.some(
        (find) =>
          find.nameGroup === values.nameGroup && // cek hanya di group yang sama
          find.name === values.name
      )

      if (!isDuplicate) {
        dispatch(setMenuItems(obj))
        resetForm()
      } else {
        alert('Nama menu sudah pernah di input dalam group ini')
      }
      setSubmitting(false)
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Add New Menu Item</CardTitle>
        <CardDescription>
          Create a new menu item and assign it to a group
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex flex-row gap-3 items-center">
                <Label>Item Name</Label>
                {formik.errors.name && formik.touched.name && (
                  <span className="text-red-600 text-sm">
                    {formik.errors.name}
                  </span>
                )}
              </div>
              <Input
                id="name"
                name="name"
                placeholder="e.g., Grilled Chicken"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-row gap-3 items-center">
              <Label>Menu Group</Label>
              {formik.errors.nameGroup && formik.touched.nameGroup && (
                <span className="text-red-600 text-sm">
                  {formik.errors.nameGroup}
                </span>
              )}
            </div>
            <Select
              value={formik.values.nameGroup}
              onValueChange={(value) =>
                formik.setFieldValue('nameGroup', value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a menu group" />
              </SelectTrigger>
              <SelectContent>
                {dataMenuGroup.map((group) => (
                  <SelectItem key={group.name} value={group.name}>
                    {group.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <div className="flex flex-row gap-3 items-center">
              <Label>Description</Label>
              {formik.errors.description && formik.touched.description && (
                <span className="text-red-600 text-sm">
                  {formik.errors.description}
                </span>
              )}
            </div>
            <Textarea
              id="description"
              name="description"
              placeholder="Brief description of the menu item"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </div>
          <Button type="submit" className="gap-2 mt-3">
            <Plus className="h-4 w-4" />
            Add Menu Item
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
