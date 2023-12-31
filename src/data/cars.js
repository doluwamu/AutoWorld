import tacoma from '../assets/img/home/tacoma.png'
import threeSeries from '../assets/img/home/3-series.png'
import fiveSeries from '../assets/img/home/5-series.png'
import mercedez from '../assets/img/home/mercedez.png'
import revoluto from '../assets/img/home/revoluto.png'
import sedan from '../assets/img/home/sedan.png'
import kuwait from '../assets/img/home/kuwait.png'
import s5 from '../assets/img/home/s5.png'

import toyotaLogo from '../assets/img/logos/toyota.png'
import lamboLogo from '../assets/img/logos/lambo.png'
import benzLogo from '../assets/img/logos/benz.png'
import bmwLogo from '../assets/img/logos/bmw.png'
import audiLogo from '../assets/img/logos/audi.png'

const cars = [
  {
    id: 1,
    image: tacoma,
    name: 'Tacoma',
    company: 'Toyota',
    model: '2018',
    rating: 4.5,
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
    companyLogo: toyotaLogo,
    details: ['2k horse power engine', 'Fuel engine', '5 seater'],
    sellerTel: '+00000000'
  },
  {
    id: 2,
    image: threeSeries,
    name: '3 Series Sedan',
    company: 'BMW',
    model: '2020',
    rating: 4.7,
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
    companyLogo: bmwLogo,
    details: ['2k horse power engine', 'Fuel engine', '5 seater'],
    sellerTel: '+00000000'
  },
  {
    id: 3,
    image: kuwait,
    name: 'Kuwait',
    company: 'Audi',
    model: '2018',
    rating: 4.5,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione in, tenetur autem eaque voluptatem officia consectetur laudantium minima laborum, ea quibusdam, vitae molestiae saepe optio libero hic repellendus a.',
    price: 100000,
    paymentPeriod: 5,
    views: {
      side: 'https://images.unsplash.com/photo-1519688758572-9ffb93688712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      side2: '',
      inner: '',
      other: ''
    },
    companyLogo: audiLogo,
    details: ['2k horse power engine', 'Fuel engine', '5 seater'],
    sellerTel: '+00000000'
  },
  {
    id: 4,
    image: fiveSeries,
    name: '5 Series Sedan',
    company: 'BMW',
    model: '2022',
    rating: 4.8,
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
    companyLogo: bmwLogo,
    details: ['2k horse power engine', 'Fuel engine', '5 seater'],
    sellerTel: '+00000000'
  },
  {
    id: 5,
    image: mercedez,
    name: 'Mercedez',
    company: 'Benz',
    model: '2021',
    rating: 4.8,
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
    companyLogo: benzLogo,
    details: ['2k horse power engine', 'Fuel engine', '5 seater'],
    sellerTel: '+00000000'
  },
  {
    id: 6,
    image: revoluto,
    name: 'Revoluto',
    company: 'Lamborghini',
    model: '2023',
    rating: 4.7,
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
    companyLogo: lamboLogo,
    details: ['2k horse power engine', 'Electric engine', '2 seater'],
    sellerTel: '+00000000'
  },
  {
    id: 7,
    image: sedan,
    name: 'Sedan',
    company: 'BMW',
    model: '2022',
    rating: 4.6,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione in, tenetur autem eaque voluptatem officia consectetur laudantium minima laborum, ea quibusdam, vitae molestiae saepe optio libero hic repellendus a.',
    price: 180000,
    paymentPeriod: 5,
    views: {
      side: 'https://images.unsplash.com/photo-1519688758572-9ffb93688712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      side2: '',
      inner: '',
      other: ''
    },
    companyLogo: bmwLogo,
    details: ['2k horse power engine', 'Fuel engine', '5 seater'],
    sellerTel: '+00000000'
  },
  {
    id: 8,
    image: s5,
    name: 'S5',
    company: 'Audi',
    model: '2020',
    rating: 4.7,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione in, tenetur autem eaque voluptatem officia consectetur laudantium minima laborum, ea quibusdam, vitae molestiae saepe optio libero hic repellendus a.',
    price: 110000,
    paymentPeriod: 5,
    views: {
      side: 'https://images.unsplash.com/photo-1519688758572-9ffb93688712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      side2: '',
      inner: '',
      other: ''
    },
    companyLogo: audiLogo,
    details: ['2k horse power engine', 'Fuel engine', '5 seater'],
    sellerTel: '+00000000'
  }
]

export default cars
