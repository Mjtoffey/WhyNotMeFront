import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../../components/Header';

export default function Page() {
    return <div>
      <h1>Home page JDH</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">about</Link>
    </div>
  }