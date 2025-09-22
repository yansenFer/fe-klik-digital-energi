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
import { setMenuGroup } from '@/lib/features/menuGroupSlice'
import { RootState } from '@/lib/store'
import { Label } from '@radix-ui/react-label'
import { useFormik } from 'formik'
import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

export default function AddMenuGroupLayout() {
  const dispatch = useDispatch()
  const dataMenuGroup = useSelector(
    (state: RootState) => state.menuGroupReducer.menuGroup
  )

  const addGroupSchema = Yup.object().shape({
    name: Yup.string().required('*Required'),
    description: Yup.string().required('*Required'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: addGroupSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const obj = {
        name: values.name,
        description: values.description,
      }

      const isDuplicate = dataMenuGroup.find(
        (find) => find.name === values.name
      )

      if (!isDuplicate) {
        dispatch(setMenuGroup(obj))
        resetForm()
      } else {
        alert('Nama menu sudah pernah di input')
      }
      setSubmitting(false)
    },
  })
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Add New Menu Group</CardTitle>
        <CardDescription>
          Create a new category to organize your menu items
        </CardDescription>
      </CardHeader>
      <form onSubmit={formik.handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex flex-row gap-3 items-center">
                <Label>Group Name</Label>
                {formik.errors.name && formik.touched.name && (
                  <span className="text-red-600 text-sm">
                    {formik.errors.name}
                  </span>
                )}
              </div>
              <Input
                id="name"
                name="name"
                placeholder="e.g., Appetizers, Main Course"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
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
              <Input
                id="description"
                name="description"
                placeholder="Brief description of this group"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <Button type="submit" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Menu Group
          </Button>
        </CardContent>
      </form>
    </Card>
  )
}
