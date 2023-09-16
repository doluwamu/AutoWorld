import tacoma from '../assets/img/home/tacoma.png'
import threeSeries from '../assets/img/home/3-series.png'
import fiveSeries from '../assets/img/home/5-series.png'
import mercedez from '../assets/img/home/mercedez.png'
import revoluto from '../assets/img/home/revoluto.png'

import toyotaLogo from '../assets/img/logos/toyota.png'
import lamboLogo from '../assets/img/logos/lambo.png'
import benzLogo from '../assets/img/logos/benz.png'
import bmwLogo from '../assets/img/logos/bmw.png'

const cars = [
  {
    id: 1,
    image: tacoma,
    name: 'Tacoma',
    company: 'Toyota',
    model: '2018',
    rating: '4.5',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione in, tenetur autem eaque voluptatem officia consectetur laudantium minima laborum, ea quibusdam, vitae molestiae saepe optio libero hic repellendus a.',
    price: 50000,
    paymentPeriod: 7,
    views: {
      side: 'https://images.unsplash.com/photo-1519688758572-9ffb93688712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      side2: '',
      inner: '',
      other: ''
    },
    companyLogo: toyotaLogo
  },
  {
    id: 2,
    image: threeSeries,
    name: '3 Series Sedan',
    company: 'BMW',
    model: '2020',
    rating: '4.7',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione in, tenetur autem eaque voluptatem officia consectetur laudantium minima laborum, ea quibusdam, vitae molestiae saepe optio libero hic repellendus a.',
    price: 150000,
    paymentPeriod: 4,
    views: {
      side: 'https://images.unsplash.com/photo-1519688758572-9ffb93688712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      side2: '',
      inner: '',
      other: ''
    },
    companyLogo: bmwLogo
  },
  {
    id: 3,
    image: fiveSeries,
    name: '5 Series Sedan',
    company: 'BMW',
    model: '2022',
    rating: '4.8',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione in, tenetur autem eaque voluptatem officia consectetur laudantium minima laborum, ea quibusdam, vitae molestiae saepe optio libero hic repellendus a.',
    price: 200000,
    paymentPeriod: 7,
    views: {
      side: 'https://images.unsplash.com/photo-1519688758572-9ffb93688712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      side2: '',
      inner: '',
      other: ''
    },
    companyLogo: bmwLogo
  },
  {
    id: 4,
    image: mercedez,
    name: 'Mercedez',
    company: 'Benz',
    model: '2021',
    rating: '4.8',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione in, tenetur autem eaque voluptatem officia consectetur laudantium minima laborum, ea quibusdam, vitae molestiae saepe optio libero hic repellendus a.',
    price: 150000,
    paymentPeriod: 2,
    views: {
      side: 'https://images.unsplash.com/photo-1519688758572-9ffb93688712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      side2: '',
      inner: '',
      other: ''
    },
    companyLogo: benzLogo
  },
  {
    id: 5,
    image: revoluto,
    name: 'Revoluto',
    company: 'Lamborghini',
    model: '2023',
    rating: '4.8',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione in, tenetur autem eaque voluptatem officia consectetur laudantium minima laborum, ea quibusdam, vitae molestiae saepe optio libero hic repellendus a.',
    price: 400000,
    paymentPeriod: 2,
    views: {
      side: 'https://images.unsplash.com/photo-1519688758572-9ffb93688712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      side2: '',
      inner: '',
      other: ''
    },
    companyLogo: lamboLogo
  }
]

export default cars
