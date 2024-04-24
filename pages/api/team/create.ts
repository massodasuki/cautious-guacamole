// api/team/create

import { NextApiRequest, NextApiResponse } from 'next';
import Team from '../../../models/Team';
import { v4 as uuidv4 } from 'uuid';


// TODO create by who ?
const createHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        // Create a new team
        try {
            const { name, foundingDate, status } = req.body;
            const id: string = uuidv4();
            const data = await Team.create({ 
                id,
                name,
                foundingDate,
                status
             });

            res.status(201).json({ data });
        } catch (error) {
            console.error('Error creating team:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
        } else {
        res.status(405).json({ message: 'Method not allowed' });
        }
};
export default createHandler;