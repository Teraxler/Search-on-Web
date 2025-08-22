import React from 'react'

export default function Footer() {
  return (
  <footer class="font-arial text-sm w-full px-5 bg-[#f2f2f2] text-[#1f1f1f] absolute bottom-0">
  <nav className='flex justify-evenly flex-wrap'>
    <ul class="flex ">
      <li><a className='block p-3.75 hover:underline' target="blank" href="https://about.google/?utm_source=google-IR&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a></li>
      <li><a className='block p-3.75 hover:underline' target="blank" href="https://www.google.co.uk/intl/en/ads/?fg=1">Advertising</a></li>
      <li><a className='block p-3.75 hover:underline' target="blank" href="https://www.google.co.uk/services/?fg=1">Business</a></li>
    </ul>
    <ul class="flex ">
      <li><a className='block p-3.75 hover:underline' target="blank" href="https://www.google.co.uk/preferences?hl=en">Settings</a></li>
      <li><a className='block p-3.75 hover:underline' target="blank" href="https://www.google.co.uk/intl/en/policies/terms/?fg=1">Terms</a></li>
      <li><a className='block p-3.75 hover:underline' target="blank" href="https://www.google.co.uk/intl/en/policies/privacy/?fg=1">Privacy</a></li>
    </ul>
  </nav>
  </footer>
  )
}
