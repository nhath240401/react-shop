import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='p-5 mt-5 md:flex'>
        <div className="flex-1 mb-2">
            <h1 className='text-xl font-bold'>SHOP UI</h1>
            <p className='text-[15px] w-[90%] mb-2'>There are many variations of passages of Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, corporis dicta placeat reiciendis, veniam consectetur, molestias quo incidunt quaerat veritatis dolore excepturi culpa error! Veritatis tempora quae delectus enim fugiat!</p>
            <div className="flex">
                <div className="p-2 text-white bg-blue-800 rounded-full cursor-pointer hover:bg-blue-600">
                    <FacebookIcon />
                </div>
                <div className="p-2 mx-2 text-white bg-orange-600 rounded-full cursor-pointer hover:bg-orange-400">
                    <InstagramIcon />
                </div>
                <div className="p-2 text-white rounded-full cursor-pointer bg-sky-600 hover:bg-sky-400">
                    <LinkedInIcon />
                </div>
                <div className="p-2 mx-2 text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-400 ">
                    <PinterestIcon />
                </div>
            </div>
        </div>

        <div className="flex-1">
            <h1 className='mb-3 text-xl font-bold text-center'>USERFUL LINKS</h1>
            <ul className='grid grid-cols-2 font-medium text-[15px] cursor-pointer'>
                <li className='py-2'>HOME</li>
                <li>CART</li>
                <li className='py-2'>MAN FASHION</li>
                <li>WOMAN FASHION</li>
                <li className='py-2'>MY ACCOUNT</li>
                <li>ORDER TRACKNG</li>
                <li className='py-2'>WISHLIST</li>
                <li>TERMS</li>
            </ul>
        </div>

        <div className="flex-1 mb-2">
            <h1 className='mb-2 text-xl font-bold text-center '>CONTACT</h1>
            <div className="py-1">
                <LocationOnIcon />
                <span className='ml-2'>Han Thuyen Street, Quarter 6, Thu Duc, Ho Chi Minh City</span>
            </div>
            <div className="py-1">
                <LocalPhoneIcon />
                <span className='ml-2'>(+84) 923 109 817</span>
            </div>
            <div className="py-1">
                <EmailIcon/>
                <span className='ml-2'>nhath240401@gmail.com</span>
            </div>
            <img 
             src="https://www.vietnam-visaonline.org/wp-content/uploads/2017/08/paypal_cards_secure-768x193.png" 
             alt="" 
             className='h-[40%] object-cover'
             />
        </div>
    </div>
  )
}

export default Footer