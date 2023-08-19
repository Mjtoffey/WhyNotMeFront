import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import jwtDecode from 'jwt-decode';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar'


export default function Page() {
    return <div>
    <h1>Dashboard</h1>
    <Link href="/">Home</Link>
    <Link href="/about">about</Link>
    <Link href="/login">login</Link>
    <Link href="/register">register</Link>
  </div>
  }