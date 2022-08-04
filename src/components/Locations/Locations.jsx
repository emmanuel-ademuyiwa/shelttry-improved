import React from 'react'
import Location from './Location'
import SectionHeader from '../SectionHeader/SectionHeader'
import ago from '../../images/ago.jpg'
import ijb from '../../images/ijb.jpg'
import oru from '../../images/oru.jpg'

const Locations = () => {
  return (
    <section>
        <div className="container">
            <SectionHeader title="popular locations" desc="See our best offers" />
            <div className="locations">
              <Location title="Ago Iwoye" img={ago}/>
              <Location title="Ijebu Igbo" img={ijb} />
              <Location title="Oru" img={oru} />
            </div>
        </div>
    </section>
  )
}

export default Locations