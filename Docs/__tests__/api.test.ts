/**
 * Colors Mood API Tests
 *
 * Run with: npm test
 *
 * These are integration tests for the contact API endpoint
 * Requires the development server to be running
 */

const API_URL = process.env.API_URL || "http://localhost:3000/api"

describe("Contact API", () => {
  describe("POST /api/contact", () => {
    it("should accept a valid submission", async () => {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Ahmed Al-Mansouri",
          email: "ahmed@example.com",
          message: "I would like a quote for vehicle wrapping services",
          lang: "en",
        }),
      })

      expect(response.status).toBe(200)
      const data = await response.json()
      expect(data.ok).toBe(true)
      expect(data).toHaveProperty("message")
    })

    it("should reject invalid email", async () => {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Test User",
          email: "invalid-email",
          message: "Test",
          lang: "en",
        }),
      })

      expect(response.status).toBe(400)
    })

    it("should reject short name", async () => {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "A",
          email: "test@example.com",
          message: "Test",
          lang: "en",
        }),
      })

      expect(response.status).toBe(400)
    })

    it("should support Arabic submissions", async () => {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "أحمد محمد",
          email: "test@example.com",
          message: "أود طلب عرض سعر للاستيكرات",
          lang: "ar",
        }),
      })

      expect(response.status).toBe(200)
      const data = await response.json()
      expect(data.ok).toBe(true)
    })

    it("should reject message exceeding 2000 chars", async () => {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
          message: "a".repeat(2001),
          lang: "en",
        }),
      })

      expect(response.status).toBe(400)
    })
  })

  describe("GET /api/contact", () => {
    it("should retrieve contact submissions", async () => {
      const response = await fetch(`${API_URL}/contact`, {
        method: "GET",
      })

      expect(response.status).toBe(200)
      const data = await response.json()
      expect(data.ok).toBe(true)
      expect(Array.isArray(data.messages)).toBe(true)
      expect(typeof data.count === "number").toBe(true)
    })
  })
})
