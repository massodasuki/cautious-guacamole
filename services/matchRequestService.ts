import Match from '../models/Match'

//  Rival Services
// SENDING, ACCEPTED, REJECTED
export async function getSendingId() :  Promise<string>{
    const level = await Level.findByRank(1);
    if (level != null) {
        return level.id;
    }
    return "";
}