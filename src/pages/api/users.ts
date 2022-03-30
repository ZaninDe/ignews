import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Zanin' },
    { id: 2, name: 'Gabriel' },
    { id: 3, name: 'Carla' },
    { id: 4, name: 'Cristine' }
  ]

  return response.json(users)
}