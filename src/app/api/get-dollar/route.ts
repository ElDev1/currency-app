import { NextResponse } from "next/server"
import { getDollarPrices } from "@/service/getDollarData"


export async function GET (req: Request) {
    try {
        const dollars = await getDollarPrices()
        return NextResponse.json(dollars)
    } catch (err) {
        return new Response(`Error, ${err}`)
    }
}