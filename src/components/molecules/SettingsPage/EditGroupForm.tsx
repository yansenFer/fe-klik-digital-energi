'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IMenuGroup } from '@/interfaces/IMenuGroup'
import { editMenuGroup } from '@/lib/features/menuGroupSlice'
import { RootState } from '@/lib/store'
import { Label } from '@radix-ui/react-label'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

type EditGroupFormProps = {
  group: IMenuGroup
  onCancel: () => void
}

export default function EditGroupForm({ group, onCancel }: EditGroupFormProps) {
  const dispatch = useDispatch()
  const dataMenuGroup = useSelector(
    (state: RootState) => state.menuGroupReducer.menuGroup
  )
  const editGroupSchema = Yup.object().shape({
    name: Yup.string().required('*Required'),
    description: Yup.string().required('*Required'),
  })

  useEffect(() => {
    formik.setValues({
      name: group?.name || '',
      description: group?.description || '',
    })
  }, [group])

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: editGroupSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const obj = {
        name: group.name,
        data: {
          name: values.name,
          description: values.description,
        },
      }

      dispatch(editMenuGroup(obj))

      setSubmitting(false)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-3">
        <div className="space-y-2">
          <div className="flex flex-row gap-3 items-center">
            <Label>Group Name</Label>
            {formik.errors.name && formik.touched.name && (
              <span className="text-red-600 text-sm">{formik.errors.name}</span>
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
        <div className="flex gap-2">
          <Button size="sm" type="submit">
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  )
}
