<<<<<<< HEAD
import { AppDispatch, RootState } from '@/app/redux/store'
=======
import { AppDispatch, RootState } from '@/redux/store'
>>>>>>> f46a519 (cleaned project)
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
