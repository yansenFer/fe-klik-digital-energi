'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { IMenuItems } from '@/interfaces/IMenuItems'
import { editMenuItems } from '@/lib/features/menuItemsSlice'
import { RootState } from '@/lib/store'
import { Label } from '@radix-ui/react-label'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

type EditItemFormProps = {
  items: IMenuItems
  onCancel: () => void
}

export default function EditItemForm({ items, onCancel }: EditItemFormProps) {
  const dispatch = useDispatch()
  const dataMenuGroup = useSelector(
    (state: RootState) => state.menuGroupReducer.menuGroup
  )

  const addItemsSchema = Yup.object().shape({
    nameGroup: Yup.string().required('*Required'),
    name: Yup.string().required('*Required'),
    description: Yup.string().required('*Required'),
  })

  useEffect(() => {
    formik.setValues({
      nameGroup: items.nameGroup || '',
      name: items?.name || '',
      description: items?.description || '',
    })
  }, [items])

  const formik = useFormik({
    initialValues: {
      name: '',
      nameGroup: '',
      description: '',
    },
    validationSchema: addItemsSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const obj = {
        name: items.name,
        nameGroup: items.nameGroup,
        data: {
          name: values.name,
          nameGroup: values.nameGroup,
          description: values.description,
        },
      }

      dispatch(editMenuItems(obj))
      resetForm()

      setSubmitting(false)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex flex-row gap-3 items-center">
              <Label>Item Name</Label>
              {formik.errors.name && formik.touched.name && (
                <span className="text-red-600 text-sm">
                  {formik.errors.name}
                </span>
              )}
            </div>{' '}
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
            value={formik.values.nameGroup || ''}
            onValueChange={(value) => {
              if (value) {
                formik.setFieldValue('nameGroup', value)
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a menu group">
                {formik.values.nameGroup
                  ? formik.values.nameGroup
                  : 'Select a menu group'}
              </SelectValue>
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
          </div>{' '}
          <Textarea
            id="description"
            name="description"
            placeholder="Brief description of the menu item"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex gap-2">
          <Button size="sm" type="submit">
            Save Changes
          </Button>
          <Button variant="outline" size="sm" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  )
}
