import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface Skip {
    id: number,
    size: number,
    hire_period_days: number,
    transport_cost: number | null,
    per_tonne_cost: number | null,
    price_before_vat: number,
    vat: number,
    postcode: string,
    area: string,
    forbidden: boolean,
    created_at: string,
    updated_at: string,
    allowed_on_road: boolean,
    allows_heavy_waste: boolean,
    image: string,
    perfect_for: string[], // <-- add this
}

interface SkipsState {
    skips: Skip[]
    loading: boolean
    error: string | null
}

const initialState: SkipsState = {
    skips: [],
    loading: false,
    error: null,
}

export const fetchSkips = createAsyncThunk<Skip[]>(
    'skips/fetchSkips',
    async () => {
        const response = await axios.get<Skip[]>('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
        if (response.status !== 200) throw new Error('Failed to fetch skips')

        const perfectForBySize: Record<number, string[]> = {
            4: ["Kitchen/bathroom refits", "Medium home clearances", "Garden projects"],
            6: ["Builders waste", "Larger home clearances", "Heavy materials"],
            8: ["Large renovations", "Office clearances", "Bulky items"],
            10: ["Major projects", "Commercial waste", "Large bulky items"],
            12: ["Large construction jobs", "Shop refits", "High volume waste"],
            14: ["Industrial waste", "Large scale renovations", "High volume heavy waste"],
            16: ["Construction sites", "Large commercial clearances", "High volume mixed waste"],
            20: ["Large construction projects", "Commercial clearances", "High volume waste removal"],
            40: ["Industrial projects", "Large scale demolitions", "High volume heavy waste removal"]
        };

        return response.data.map(skip => ({
            ...skip,
            image: `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`,
            perfect_for: perfectForBySize[skip.size] || ["General waste removal", "Mixed waste", "Various projects"]
        }))
    }
)

const skipsSlice = createSlice({
    name: 'skips',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkips.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchSkips.fulfilled, (state, action) => {
                state.loading = false
                state.skips = action.payload
            })
            .addCase(fetchSkips.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch skips'
            })
    },
})

export default skipsSlice.reducer