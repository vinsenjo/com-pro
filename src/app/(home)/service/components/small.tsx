import Image from "next/image";
export default function Small() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden">
      <div className="mx-5   lg:rounded-3xl">
        <div className="flex-col lg:flex-row flex gap-2">
          <div className="bg-white pb-5 lg:my-5 lg:rounded-3xl lg:mt-10 lg:w-1/2 flex flex-col text-black justify-end gap-3 px-5  ">
          <div className="flex  justify-between gap-8 py-5">
          <h2 className="w-1/4 lg:w-[500px] text-lg lg:text-2xl  ">
            Experience Excellence with FastShip Logistic
          </h2>
          <p className="w-3/4 lg:w-[600px] text-sm lg:text-sm mx-5">
            We prioritize, reliability, and a customer-centric approach, making
            your satisfication our top priority. Experience the difference of a
            logistics partner committed to excellence-experience FastShip
            Logistics.
          </p>
        </div>
            <h3 className="text-lg lg:text-2xl font-semibold">
              What is Considered a Small Move?
            </h3>
            <div className="text-sm lg:text-lg">
              <p>
                Generally speaking, a small move means that you have less items
                to move and, many times, this is due to living in a smaller
                space. We may consider thehome types as small moves: 1-3 bedroom apartment, 1 bedroom house, Studio apartment, Storage unit 
              </p>


              <br />
              <p>
                The following long distance moves may also qualify as small
                moves:
              </p>
              <ul>
                <li>Distributing family heirlooms </li>
                <li>Moving a small office or shop </li>
                <li>Helping parents move into an assisted living facility</li>
                <li>Sending a few items to a friend in another state</li>
                <li> Moving a young adult out of his/her parent’s house</li>
              </ul>
              <br />
              <p className="bg-[#cdff80] p-3 rounded-xl font-semibold">
                Not sure if your move qualifies? Don’t worry – we’ll help you
                determine if your move qualifies for Snapmoves.
              </p>
            </div>
          </div>
          <div className="lg:w-3/4 grid grid-cols-2 grid-rows-2 gap-3 my-5 text-black lg:px-0 px-5">
            <div className="flex flex-col border-2 p-5 rounded-3xl justify-center items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={50}
                  className="text-[#0d2030]"
                >
                  <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                </svg>
              </div>
              <div>
                <h4 className="lg:text-xl text-center font-bold py-3">
                  Get Your Quote Faster and Easier
                </h4>
                <p className="text-sm hidden lg:block lg:text-base ">
                  Our Virtual Survey app allows you to video chat with an
                  estimator to provide you with a more quote faster.
                </p>
              </div>
            </div>
            <div className="lg:min-h-[300px] bg-[#0d2030] text-white p-5 rounded-3xl  flex flex-col justify-center items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={50}
                  className="text-[#cdff80]"
                >
                  <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM11 11H13V13H11V11ZM16 11H18V13H16V11Z"></path>
                </svg>
              </div>
              <div>
                <h4 className="lg:text-xl text-center font-bold py-3">
                  Snapmoves Priority
                </h4>
                <p className="text-sm hidden lg:block lg:text-base">
                  If you need an exact move day, our Priority Service provides
                  day-certain delivery for an additional cost
                </p>
              </div>
            </div>
            <div className="lg:h-[300px] flex bg-[#0d2030] text-white p-5 rounded-3xl flex-col justify-center items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={50}
                  className="text-[#cdff80]"
                >
                  <path d="M3 10H2V4.00293C2 3.44903 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.43788 22 4.00293V10H21V20.0015C21 20.553 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5525 3 20.0015V10ZM19 10H5V19H19V10ZM4 5V8H20V5H4ZM9 12H15V14H9V12Z"></path>
                </svg>
              </div>
              <div>
                <h4 className="lg:text-xl text-center font-bold py-3">
                  Only Pay for the Services You Need
                </h4>
                <p className="text-sm hidden lg:block lg:text-base">
                  Our mix and match moving services can make your move easier.
                  Build your personalized plan with things like packing,
                  storage, convenience services and additional move protection.
                </p>
              </div>
            </div>
            <div className="lg:h-[300px] border-2 p-5 rounded-3xl flex flex-col justify-center items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={50}
                  className="text-[#0d2030]"
                >
                  <path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"></path>
                </svg>
              </div>
              <div>
                <h4 className="lg:text-xl text-center font-bold py-3">
                  Full-Value Protection is Included
                </h4>
                <p className="text-sm hidden lg:block lg:text-base">
                  Unless you waive the full value option, or choose to declare a
                  higher value, we offer our standard level of Full Value
                  Protection option in every initial quote, meaning we’ll repair
                  or replace lost/damaged items*.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
