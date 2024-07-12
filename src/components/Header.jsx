import React from 'react'
import logo from '../assets/investment-calculator-logo.png'
import { calculateInvestmentResults } from './../util/investment';

export default function Header() {
  return (
    <header id='header'>
        <img src={logo} alt="" />
        <h1>Investment Calculator</h1>
    </header>
  )
}
