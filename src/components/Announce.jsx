import CloseIcon from '@mui/icons-material/Close';

const Announce = () => {
  return (
    <div className="h-[30px] bg-teal-500 text-white py-1 flex  w-full justify-center items-center">
        Super deal! Free Shipping on Orders Over $50
        <CloseIcon className='ml-2 font-semibold cursor-pointer' />
    </div>
  )
}

export default Announce