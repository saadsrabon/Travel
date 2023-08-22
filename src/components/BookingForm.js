import React, { useId } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dateFrom, destinationFrom, destinationTo, flightTypeClass, guest, submitData } from '../redux/bookingForm/actions';
import BookingPreview from './BookingPreview';
import logoFile from '../assets/lws-logo.svg'
import frame from '../assets/icons/Frame.svg'
import three from '../assets/icons/Vector (3).svg'
import one from '../assets/icons/Vector (1).svg'

// destinationFrom: 'Hello',
// destinationTo: '',
// dateFrom: '',
// guest:'',
// flightTypeClass: '',
// bookings: []
const BookingForm = () => {
    // 
    const DesFrom = useSelector((state) => state.destinationFrom);
    const DesTo = useSelector((state) => state.destinationTo);
    const DateFrom = useSelector((state) => state.dateFrom);
    const Guest = useSelector((state) => state.guest);
    const FlightTypeClass = useSelector((state) => state.flightTypeClass);
    const Bookings = useSelector((state) => state.bookings);
    const dispatch = useDispatch();

    // Manage Destination From
    const destinationFromHandler =(value)=>{
        dispatch(destinationFrom(value))
    }
    // Manage Destination To
    const destinationToHandler =(value)=>{
        dispatch(destinationTo(value))
    }
    // Manage Date From
    const dateFromHandler =(value)=>{
        dispatch(dateFrom(value))
    }
    // Manage Guest
    const guestHandler =(value)=>{
        dispatch(guest(value))
    }
    const flightTypeClassHandler =(value)=>{
        dispatch(flightTypeClass(value))
    }
// get data and pass in dispatch
    const submitDatas = (value) => {
     dispatch(submitData(value))
    }

    // formhandler to make combine data in a object and pass in submitDatas
    const formHandler = (e) => {  
        e.preventDefault()
        const id = Math.floor(Math.random() * 10000) + 1;
        const data = {
            destinationFrom: DesFrom,
            destinationTo: DesTo,
            dateFrom: DateFrom,
            guest: Guest,
            flightTypeClass: FlightTypeClass,
            id:id
        }
       
       submitDatas(data)
    }

    console.log(useSelector((state) => state))
    console.log(Bookings)
  return (
    <div>
    <header id="header">
      <div class="container">
        <img src={logoFile} alt="logos" class="logo" />
        <div class="flex items-center">
          <a class="text-white min-w-[50px] font-medium" href="/">Home</a>
          <button class="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  
  
    <section>
      {/* <!-- Input Data --> */}
      <div class="mt-[160px] mx-4 md:mt-[160px] relative">
        <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form class="first-hero lws-inputform">
            {/* <!-- From --> */}
            <div class="des-from">
              <p>Destination From</p>
              <div class="flex flex-row">
                <img src={frame} alt="" />
                <select onClick={(e)=> destinationFromHandler(e.target.value)  } defaultValue={DesFrom} class="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                  <option value="" hidden>Please Select</option>
                  <option value='Dhaka'>Dhaka</option>
                  <option value='Sylhet'>Sylhet</option>
                  <option value ="Saidpur">Saidpur</option>
                  <option value='Coxs Bazar'>Cox's Bazar</option>
                </select>
              </div>
            </div>
  
            {/* <!-- To --> */}
            <div class="des-from">
              <p>Destination To</p>
              <div class="flex flex-row">
                <img src={frame} alt="" />
                <select onClick={(e)=> {destinationToHandler(e.target.value) ; console.log(e.target.value) } } defaultValue={DesTo} class="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                  <option value="" hidden>Please Select</option>
                  <option value='Dhaka'>Dhaka</option>
                  <option value='Sylhet'>Sylhet</option>
                  <option value ="Saidpur">Saidpur</option>
                  <option value='Coxs Bazar'>Cox's Bazar</option>
                </select>
              </div>
            </div>
  
            {/* <!-- Date --> */}
            <div class="des-from">
              <p>Journey Date</p>
              <input onChange={(e)=>dateFromHandler(e.target.value)} type="date" class="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
            </div>
  
            {/* <!-- Guests --> */}
            <div class="des-from">
              <p>Guests</p>
              <div class="flex flex-row">
                <img src={one} alt="" />
                <select defaultValue={Guest} onClick={(e)=>guestHandler(e.target.value)} class="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                  <option value="" hidden>Please Select</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>
  
            {/* <!-- Class --> */}
            <div class="des-from !border-r-0">
              <p>Class</p>
              <div class="flex flex-row">
                <img src={three} alt="" />
                <select onClick={(e)=>flightTypeClassHandler(e.target.value)} defaultValue={FlightTypeClass} class="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                  <option  value="" hidden>Please Select</option>
                  <option value="Business">Business</option>
                  <option value='Economy'>Economy</option>
                </select>
              </div>
            </div>
  
            <button disabled={Bookings.length >2} onClick={formHandler} class="addCity" type="submit" id="lws-addCity">
              <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span class="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
      </section>
      <BookingPreview Bookings={Bookings}/>
      </div>
  )
}

export default BookingForm