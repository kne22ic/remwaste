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

// Replace this URL with your actual API endpoint
export const fetchSkips = createAsyncThunk<Skip[]>(
    'skips/fetchSkips',
    async () => {
        // For the task we are using a static URL.
        // We should use a env variable in a real application.
        const response = await axios.get<Skip[]>('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
        if (response.status !== 200) throw new Error('Failed to fetch skips')
        return response.data.map(skip => ({
            ...skip,
            image: `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`
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