import zod from 'zod'

const validateSchool = zod.object({
    name: zod.string(),
    address: zod.string(),
    latitude: zod.number(),
    longitude: zod.number(),
})

export default validateSchool