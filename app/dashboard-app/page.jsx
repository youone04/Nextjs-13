import React from 'react';
import ProfileAdmin from './prfile-admin';
import { getServerSession } from "next-auth/next"
import Sections from '../../components/sections';

// import { Container } from './styles';

async function DashboardApp() {
  const session = await getServerSession()

  return <>
  {
  session ? <Card user={session.user?.name} />: <p style={{ color: 'red'}}>Login Kembali</p>
  }
  <ProfileAdmin/>
  <Sections/>
  </>;
}

export default DashboardApp;