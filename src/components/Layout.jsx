import Modal from './Modal';
import React, {useEffect} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {usePage} from './PageContext';

export default function Layout({children, route}) {
  const page = usePage();
  useEffect(() => {
    document.body.className = `hgms-app ${page.loginPanel === 'forgot' ? 'hgms-show-forgot' : ''}`;
    document.title = `${page.page === 'home' ? 'Dashboard' : route?.title || 'HGMS'} | HGMS`;
  }, [page.page, page.loginPanel, route?.title]);
  if (route?.shell === false) return <main className="min-h-screen bg-canvas p-4 sm:p-8">{children}</main>;
  return <div className="min-h-screen bg-canvas text-ink">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Sidebar />
    <Modal id="global-organizations" title="Switch organization"/>
    <div className="min-w-0 lg:pl-[244px]">
      <Header />
      <main id="main-content" className={`mx-auto min-h-[calc(100vh-132px)] max-w-[1680px] p-4 sm:p-6 xl:px-9 xl:py-7 ${page.page === 'home' ? '' : 'module-content'}`}>{page.organization.id==='all'&&<p className="mb-4 rounded-lg bg-primary-soft px-4 py-3 text-sm text-primary-deep">Showing all Highgrade branches. Select a branch to add or change records.</p>}{children}</main>
      <Footer />
    </div>
  </div>;
}
