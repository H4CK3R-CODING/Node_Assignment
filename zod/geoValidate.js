import zod from 'zod'

const geoValidate = zod.object({
    user_lat: zod.number(),
    user_lng: zod.number(),
})

export default geoValidate