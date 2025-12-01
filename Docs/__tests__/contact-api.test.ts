/**
 * Contact API Route Tests
 *
 * To run:
 * npm test -- __tests__/contact-api.test.ts
 *
 * Or with Jest directly:
 * jest __tests__/contact-api.test.ts
 */

describe("Contact API Route", () => {
  const baseUrl = "http://localhost:3000/api/contact"

  describe("POST /api/contact", () => {
    it("should accept valid contact form submission", async () => {
      const validPayload = {
        name: "John Doe",
        email: "john@example.com",
        message: "I would like a quote for vehicle wrapping",
        lang: "en",
      }

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validPayload),
      })

      expect(response.status).toBe(200)
      const data = await response.json()
      expect(data.ok).toBe(true)
    })

    it("should reject submission with invalid email", async () => {
      const invalidPayload = {
        name: "Jane Doe",
        email: "not-an-email",
        message: "Test message",
        lang: "en",
      }

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invalidPayload),
      })

      expect(response.status).toBe(400)
    })

    it("should reject submission with short name", async () => {
      const invalidPayload = {
        name: "J",
        email: "john@example.com",
        message: "Test",
        lang: "en",
      }

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invalidPayload),
      })

      expect(response.status).toBe(400)
    })

    it("should support Arabic language", async () => {
      const arabicPayload = {
        name: "أحمد محمد",
        email: "ahmed@example.com",
        message: "أود الحصول على عرض سعر",
        lang: "ar",
      }

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arabicPayload),
      })

      expect(response.status).toBe(200)
      const data = await response.json()
      expect(data.ok).toBe(true)
    })
  })

  describe("GET /api/contact", () => {
    it("should retrieve submitted contact messages", async () => {
      const response = await fetch(baseUrl, { method: "GET" })

      expect(response.status).toBe(200)
      const data = await response.json()
      expect(data.ok).toBe(true)
      expect(Array.isArray(data.messages)).toBe(true)
      expect(typeof data.count).toBe("number")
    })
  })
})
