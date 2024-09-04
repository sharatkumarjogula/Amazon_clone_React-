import React from 'react';
import logo from '../assets/images/logo.png';
import {
  DeliveryDiningRounded, Discount, EmojiEvents, GppBad, GppGood, IosShare, Key, LocationOnOutlined, RepeatRounded, Search, ShoppingCart,
} from '@mui/icons-material';
import Dropdown from 'react-bootstrap/Dropdown';
import { Menu } from '@mui/material';
import logo3 from '../assets/images/logo3.png';

const Topnav = () => {
  return (
    <>
      <div className="navbar bg-black p-2 w-100 d-flex flex-nowrap">
        <img className="logo" src={logo} alt="Logo"/>
        <div className="d-flex m-0 align-items-center">
          <LocationOnOutlined className="text-light"/> 
          <div className="text-white d-none d-md-block">
            <h6>Hello</h6>
            <p>Select your address</p>
          </div>
        </div>
        <div className="bg-white rounded col-lg-5 d-flex">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <input className="form-control border-0" type="text" placeholder="Search.."/>
          <button className="btn btn-warning">
            <Search/>
          </button>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic" className="text-light">
            EN
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Telugu</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Gujarati</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Marathi</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Bengali</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="text-white d-none d-lg-block">
          <p>Hello, sign in</p>
          <h5>Accounts & Lists</h5>
        </div>
        <div className="text-white">
          <p>Returns &</p>
          <h5>Orders</h5>
        </div>
        <div className="d-flex">
          <ShoppingCart className='text-light'/>  
          <h5 className="text-white">Cart</h5>
        </div>
      </div>
      <div className="navbar bg-secondary text-white p-1">
        <Menu/>
        <h6>ALL</h6>
        <a className="nav-link active" aria-current="page" href="#">Amazon miniTV</a>
        <a className="nav-link" href="#">Sell</a>
        <a className="nav-link" href="#">Best Sellers</a>
        <a className="nav-link" href="#">Today's Deals</a>
        <a className="nav-link" href="#">Mobiles</a>
        <a className="nav-link" href="#">New Releases</a>
        <a className="nav-link" href="#">Customer Service</a>
        <a className="nav-link" href="#">Prime</a>
        <a className="nav-link" href="#">Electronics</a>
        <a className="nav-link" href="#">Gift Ideas</a>
        <a className="nav-link" href="#">Home & Kitchen</a>
        <a className="nav-link" href="#">New Launches for Mobiles, Electronics and More | Shop Now</a>
      </div>
      <div className="navbar bg-white shadow p-2">
        <p><b>Electronics</b></p>
        <a className="nav-link" href="#">Laptops & Accessories</a>
        <a className="nav-link" href="#">Laptops & Accessories</a>
        <a className="nav-link" href="#">TV & Home Entertainment</a>
        <a className="nav-link" href="#">Cameras</a>
        <a className="nav-link" href="#">Audios</a>
        <a className="nav-link" href="#">Computer Peripherals</a>
        <a className="nav-link" href="#">Smart Technology</a>
        <a className="nav-link" href="#">Musical Instruments</a>
        <a className="nav-link" href="#">Office & Stationary</a>
      </div>
      <div className="d-flex d-none d-md-flex">
        <a className="text-black mt-10" href="#">Electronics</a>
        <a className="text-black mt-10" href="#">Mobiles & Accessories</a>
        <a className="text-black mt-10" href="#">Smartphones & Basic Mobiles</a>
        <a className="text-black mt-10" href="#">Smartphones</a>
      </div>
      <div className="d-block d-md-flex">
        <div className="col-6 d-flex">
          <div className="col-1 flex-row">
            <div className="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
              <img className="w-100 rounded h-7" src="https://m.media-amazon.com/images/I/812yohjGZ2L._SY741_.jpg" alt=""/>
            </div>
            <div className="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
              <img className="w-100 rounded h-7" src="https://m.media-amazon.com/images/I/71R2u-n-bVL._SX679_.jpg" alt=""/>
            </div>
            <div className="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
              <img className="w-100 rounded h-7" src="https://m.media-amazon.com/images/I/81W-nknAKEL._SX679_.jpg" alt=""/>
            </div>
            <div className="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
              <img className="w-100 rounded h-7" src="https://m.media-amazon.com/images/I/71MWF3boKiL._SX679_.jpg" alt=""/>
            </div>
            <div className="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
              <img className="w-100 rounded h-7" src="https://m.media-amazon.com/images/I/81fgR0nttVL._SX679_.jpg" alt=""/>
            </div>
            <div className="col-12 mb-3 ms-3 w-75 rounded border border-secondary">
              <img className="w-100 rounded h-7" src="https://m.media-amazon.com/images/I/71Vul6806pL._SL1500_.jpg" alt=""/>
            </div>
          </div>
          <div className="col-10 ms-3">
            <img src="https://m.media-amazon.com/images/I/812yohjGZ2L._SY741_.jpg" alt=""/>
          </div>
          <div className="col-1 mt-10">
            <IosShare/>
          </div>
        </div>
        <div className="col-lg-6 bg-white flex-row p-3 d-lg-flex">
          <div className="col-7">
            <h4>Samsung Galaxy S20 FE 5G (Cloud Mint, 8GB RAM, 128GB Storage)</h4>
            <a className="link-primary text-decoration-none" href="#">Visit the Samsung Store</a>
            <div className="d-flex p-1">
              <img className="logo" src={logo3} alt=""/>
              <a className="link primary p-1 text-decoration-none" href="#">32,246 ratings</a>
              <a className="link primary p-1 text-decoration-none" href="#">1000+ answers</a>
            </div>
            <hr/>
            <button className="mt-4 btn btn-danger rounded">Deal</button>
            <div className="d-flex">
              <h5 className="text-danger mt-3">-53%</h5>
              <h4 className="ms-2 mt-3">₹34,999</h4>
            </div>
            <p>Inclusive of all taxes</p>
            <p>EMI starts at ₹1,672. No Cost EMI available</p>
            <hr/>
            <div className="d-flex p-2">
              <Discount/>
              <h6 className="ms-2 mt-1">Offers</h6>
            </div>
            <div className="d-flex overflow-scroll mb-3">
              <div className="col-3 me-3 border border-secondary p-2 rounded bg-light">
                <Key/>
                <p>No Cost EMI</p>
                <p>Upto ₹1,500 off</p>
              </div>
              <div className="col-3 me-3 border border-secondary p-2 rounded bg-light">
                <DeliveryDiningRounded/>
                <p>Get it by</p>
                <p>Tomorrow, 11AM</p>
              </div>
              <div className="col-3 me-3 border border-secondary p-2 rounded bg-light">
                <GppGood/>
                <p>1 Year Warranty</p>
              </div>
              <div className="col-3 me-3 border border-secondary p-2 rounded bg-light">
                <GppBad/>
                <p>Free</p>
                <p>Screen Replacement</p>
              </div>
              <div className="col-3 me-3 border border-secondary p-2 rounded bg-light">
                <EmojiEvents/>
                <p>Exchange Offer</p>
                <p>Upto ₹5,000 off</p>
              </div>
              <div className="col-3 me-3 border border-secondary p-2 rounded bg-light">
                <RepeatRounded/>
                <p>BuyBack Guarantee</p>
                <p>Upto ₹3,000 off</p>
              </div>
            </div>
            <button className="btn btn-warning w-75">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
