import React from 'react'
import logo from '../assets/images/logo.png'
import {   DeliveryDiningRounded, Discount, EmojiEvents, GppBad, GppGood, HttpSharp, IosShare, Key, LocalActivity, LocationOnOutlined, LockClockSharp, RepeatRounded, Search, Security, ShoppingCart, } from '@mui/icons-material'
import Dropdown from 'react-bootstrap/Dropdown';
import { Menu } from '@mui/material';
import logo3 from '../assets/images/logo3.png'


const Topnav = () => {
  return (
    <>
     <div class="navbar bg-black p-2  w-100 d-flex flex-nowrap  ">
            <img  class="logo" src={logo}/>
            <div  class="d-flex m-0 align-items-center">
                <LocationOnOutlined className="text-light"/> 
                    <div class="text-white d-none d-md-block">
                        <h6>Hello</h6>
                        <p>Select your address</p>
                    </div>
            </div>
            <div class="bg-white rounded col-lg-5 d-flex">
                <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-basic " >
                        All
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
    
                <input class="form-control border-0" type="text" placeholder="search.."/>
                <button class="btn btn-warning">
                    <Search/>
                </button>
                


            </div>
            <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" class="text-light">
       EN
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Telugu</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Gujarati</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Marati</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bngali</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

            <div class="text-white d-none d-lg-block" >
                <p>Hello, sign in</p>
                <h5>Accounts & Lists</h5>
            </div>
            <div class="text-white">
                <p>Returns &</p>
                <h5> Orders</h5>
            </div>
            <div class="d-flex">
            <ShoppingCart className='text-light'/>  
            <h5 class="text-white">cart</h5>
           
            


            </div>
   
        </div>
        <div class="navbar bg-secondary text-white p-1 ">
            <Menu/>
            <h6>ALL</h6>
            <a class="nav-link active" aria-current="page" href="#">Amazon mini tv</a>
            <a class="nav-link" href="#">Sell</a>
            <a class="nav-link" href="#">Best Sellers</a>
            <a class="nav-link" href="#">Today's deals</a>
            <a class="nav-link" href="#">Mobiles</a>
            <a class="nav-link" href="#">New Releases</a>
            <a class="nav-link" href="#">custumer service</a>
            <a class="nav-link" href="#">Prime</a>
            <a class="nav-link" href="#">Electronics</a>
            <a class="nav-link" href="#">gift ideas</a>
            <a class="nav-link" href="#">Home & kitchen</a>
            <a class="nav-link" href="#">New launches For Mobiles Electronics and more|Shop now</a>
        </div>
        <div class="navbar bg-white shadow p-2 ">
            <p><b>Electronics</b></p>
            <a class="nav-link" href="#">Laptops & Accessories</a>
            <a class="nav-link" href="#">Laptops & Accessories</a>
            <a class="nav-link" href="#">TV & HomeEntertainment</a>
            <a class="nav-link" href="#">Cameras</a>
            <a class="nav-link" href="#">Audios</a>
            <a class="nav-link" href="#">Computer peripherals</a>
            <a class="nav-link" href="#">Smart Technology</a>
            <a class="nav-link" href="#">MusicalInstruments</a>
            <a class="nav-link" href="#">Office & Stationary</a>

        </div>
        <div class="d-flex d-none d-md-flex">
            <a class="text-black mt-10" href="#">Electronics</a>
            <a class="text-black mt-10" href="#">Mobiles & Accessories</a>
            <a class="text-black mt-10" href="#">Smartphones & basicMobiles</a>
            <a class="text-black mt-10" href="#">Smartphones</a>
        </div>
        <div class="d-block d-md-flex">
            <div class="col-6 d-flex">
                <div class="col-1 flex-row">
                    <div class="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
                        <img  class="w-100 rounded h-7" src="https://m.media-amazon.com/images/I/812yohjGZ2L._SY741_.jpg"/>
                    </div>
                    <div class="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
                        <img  class="w-100 rounded h-7 " src="https://m.media-amazon.com/images/I/71R2u-n-bVL._SX679_.jpg"/>
                    </div>
                    <div class="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
                        <img  class="w-100 rounded h-7" src="https://m.media-amazon.com/images/I/81W-nknAKEL._SX679_.jpg"/>
                    </div>
                    <div class="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
                        <img  class="w-100 rounded h-7" src="https://m.media-amazon.com/images/I/71MWF3boKiL._SX679_.jpg"/>
                    </div>
                    <div class="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
                        <img  class="w-100 rounded h-7 " src="https://m.media-amazon.com/images/I/81fgR0nttVL._SX679_.jpg"/>
                    </div>
                    <div class="col-12 mb-3 ms-3 w-75 rounded  border border-secondary">
                        <img  class="w-100  rounded h-7" src="https://m.media-amazon.com/images/I/71Vul6806pL._SL1500_.jpg"/>
                    </div>
                </div>
                <div class="col-10 ms-3">
                    <img src="https://m.media-amazon.com/images/I/812yohjGZ2L._SY741_.jpg"/>

                </div>
                <div class="col-1 mt-10">
                    <IosShare/>
                </div>
           


            </div>
            <div class="col-lg-6  bg-white  flex-row p-3 d-lg-flex ">
                <div class="col-7">
                    <h4>Samsung Galaxy S20 FE 5G (Cloud Mint, 8GB RAM, 128GB Storage)</h4>
                    <a class="link-primary text-decoration-none " href="#"> visit the samsungstore</a>
                
                    <div class="d-flex p-1">
                        <img  class="logo" src={logo3}/>
                        <a class="link primary p-1 text-decoration-none " href="#">32,246rating</a>
                        <a class="link primary p-1 text-decoration-none " href="#">1000+answers</a>
                    </div>
                    <hr/>
                    <button class=" mt-4 btn btn-danger rounded ">deal</button>
                    <div class="d-flex">
                        <h5 class="text-danger mt-3">-53%</h5>
                        <h4 class="ms-2 mt-3">₹34,999</h4>
                    </div>
                    <p>Inclusive of all taxes</p> 
                    <p>EMI starts at ₹1,672. No Cost EMI available </p>               
                    <hr/>
                    <div class="d-flex p-2 ">
                        <Discount/>
                        <h6 class="ms-2 mt-1">Offers</h6>
                    </div>
                    <div class="d-flex overflow-scroll mb-3 ">
                        <div class="col-3 p-2 col-box   rounded bg-white shadow">
                            <p class="mb-1"><b>No Cost EMI</b></p>
                            <p>Avail No Cost EMI on select cards for orders above ₹3000Avail No Cost EMI on select cards for orders above ₹3000</p>
                        </div>
                        <div class="col-3   p-2 col-box rounded bg-white  shadow">
                            <p><b>Bank-offer</b></p>
                            <p>Flat INR 1250 Instant Discount on HDFC Bank Card EMI Txn. Minimum purchase value INR 15000</p>
                        </div>
                        <div class="col-3 p-2 col-box bg-white shadow">
                            <p><b>Cash-Back</b></p>
                            <p>Earn 10% back up to Rs. 100</p>
                        </div>
                        <div class="col-3 p-2  col-box bg-white  shadow">
                            <p><b>Patner offers</b></p>
                            <p>Get GST invoice and save up to 28% on business purchases</p>
                        </div>        
                    </div>
                    <hr/>
                    <div class="d-flex mt-5 overflow-scroll mb-3">
                        <div class="ms-2">
                            <DeliveryDiningRounded/><br/>
                            <a class="link-primary text-decoration-none">Fast delivery</a>    
                        </div>
                        <div class="ms-2">
                            <RepeatRounded/><br/>
                            <a class="link-primary text-decoration-none">Easy returns</a>    
                        </div>
                        <div class="ms-2">
                            <GppGood/><br/>
                            <a class="link-primary text-decoration-none">1-year warranty</a>    
                        </div>
                        <div class="ms-2">
                            <EmojiEvents/><br/>
                            <a class="link-primary text-decoration-none">Top brand</a>    
                        </div>
                        <div class="ms-2">
                            <Key/><br/>
                            <a class="link-primary text-decoration-none d">Secure trans</a>    
                        </div>
                        <div class="ms-2">
                            <DeliveryDiningRounded/><br/>
                            <a class="link-primary text-decoration-none">1-year warranty</a>    
                        </div>
                        <div class="ms-2">
                            <EmojiEvents/><br/>
                            <a class="link-primary text-decoration-none">Top brand</a>    
                        </div>
                        <div class="ms-2">
                            <GppBad/><br/>
                            <a class="link-primary text-decoration-none d">Secure transactions</a>    
                        </div>
                       
                        

                    </div>
                    <hr/>
                </div>
                








               
                <div class=" rounded col-5  shadow bg-white ms-2  ">
                    <div class="col-12 bg-secondary-subtle rounded p-2 d-flex flex-column ">
                           <p class="ms-2"><b>without Exchange</b><input class="ms-5 " type="radio"/></p>
                            <a class="link-danger ms-2 text-decoration-none " href="#">Up to ₹28,700.00 off</a>
                    </div>
                    <div class="col-12 bg-white p-2">
                        <p class="ms-2"> <b>Without Exchange</b><input class="ms-5" type="radio"/></p>
                        <div class="d-flex">
                            <p class="text-danger ms-2"><b >₹34,999.00 </b></p>
                            <p class="text-decoration-line-through ms-1 mb-3"> ₹74,990.00</p>
                            
                        </div>
                        <div class="d-flex">
                            <a class="link-primary text-decoration-none ms-2" href="#">Free delivery</a>
                            <p  class="ms-2"><b>Friday,28th july.</b></p>
                        </div>
                        <div class="d-flex">
                            <p  class="ms-2">Order with-in</p>
                            <a class=" ms-1 text-decoration-none link-success" href="#">8 hrs 59 mins.</a>
                        </div>
                        <div class=" mb-3" > <a class=" ms-2  text-decoration-none  " href="#">Details</a></div>
                        <div class="d-flex ms-2 mb-3"> 
                            <LocationOnOutlined/>
                            <a class=" ms-1 text-decoration-none link-success" href="#">select delivery location.</a>
                        </div>
                        <div>
                            <p class="ms-2 mb-1"><a class="  text-decoration-none  link-success" href="#" > In stock</a></p>
                        </div>
                        <div class="d-flex ms-2">
                            <p>sold by</p>
                            <a class="link-primary  text-decoration-none ms-1">Appario private LTD</a>
                        </div>
                        <div class="d-flex ms-2 mb-2">
                            <p>and</p>
                            <a class="link-primary  text-decoration-none ms-1"> Fulfilled by Amazon.</a>
                        </div>
                        <p class="ms-2"><b>Add a protection plan:</b></p>
                        <div class="ms-2 d-flex">
                            
                            <p class="text-danger"><input type="checkbox"/><a class="link-primary text-decoration-none mb-2" href="#">Acko 1-year Screen Protection Plan </a>for ₹1,149.00</p>
                        </div>
                        <div class="d-flex flex-column mb-2">
                            <button class="rounded  mb-2 bg-warning ">Add to cart</button>
                            <button class="rounded  mt-2 bg-warning ">Buy now </button>
                        </div>
                        <div class="ms-2 mb-2">
                            <LockClockSharp/>
                            <a class="link-primary  text-decoration-none ms-1"> Secure trandsaction.</a>
                        </div>
                        <div class="ms-2 d-flex">
                            <input type="checkbox"/><p class="ms-1">Add gift options</p>
                        </div>
                    
                        

                    </div>
                

                </div>

                
            </div>







        </div>
    </>
  )
}

export default Topnav