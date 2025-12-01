/**
 * Site Validation Script
 *
 * Validates key aspects of the Colors Mood website
 * Run with: npx ts-node scripts/validate-site.ts
 */

import fs from "fs"
import path from "path"

interface ValidationResult {
  name: string
  passed: boolean
  message: string
}

const results: ValidationResult[] = []

// Check translation files exist
const checkTranslations = () => {
  const localesDir = path.join(process.cwd(), "locales")
  const enFile = path.join(localesDir, "en.json")
  const arFile = path.join(localesDir, "ar.json")

  const enExists = fs.existsSync(enFile)
  const arExists = fs.existsSync(arFile)

  if (enExists && arExists) {
    const en = JSON.parse(fs.readFileSync(enFile, "utf-8"))
    const ar = JSON.parse(fs.readFileSync(arFile, "utf-8"))

    const keysMatch = Object.keys(en).length === Object.keys(ar).length
    results.push({
      name: "Translation Files",
      passed: keysMatch,
      message: keysMatch
        ? `✓ Both translation files present with ${Object.keys(en).length} keys`
        : `✗ Translation key mismatch (EN: ${Object.keys(en).length}, AR: ${Object.keys(ar).length})`,
    })
  } else {
    results.push({
      name: "Translation Files",
      passed: false,
      message: `✗ Missing translation files`,
    })
  }
}

// Check required components exist
const checkComponents = () => {
  const componentsDir = path.join(process.cwd(), "components")
  const requiredComponents = [
    "header.tsx",
    "hero-section.tsx",
    "about-section.tsx",
    "services-section.tsx",
    "vehicle-section.tsx",
    "portfolio-section.tsx",
    "contact-section.tsx",
    "footer.tsx",
  ]

  const allExist = requiredComponents.every((comp) => fs.existsSync(path.join(componentsDir, comp)))

  results.push({
    name: "Components",
    passed: allExist,
    message: allExist ? `✓ All ${requiredComponents.length} required components present` : `✗ Missing some components`,
  })
}

// Check API route exists
const checkAPI = () => {
  const apiRoute = path.join(process.cwd(), "app", "api", "contact", "route.ts")
  const exists = fs.existsSync(apiRoute)

  results.push({
    name: "API Routes",
    passed: exists,
    message: exists ? "✓ Contact API route configured" : "✗ Contact API route missing",
  })
}

// Check environment example
const checkEnvExample = () => {
  const envExample = path.join(process.cwd(), ".env.example")
  const exists = fs.existsSync(envExample)

  results.push({
    name: "Environment Configuration",
    passed: exists,
    message: exists ? "✓ .env.example present" : "✗ .env.example missing",
  })
}

// Run validations
console.log("\n🔍 Validating Colors Mood Website...\n")

checkTranslations()
checkComponents()
checkAPI()
checkEnvExample()

// Print results
results.forEach((result) => {
  const icon = result.passed ? "✅" : "❌"
  console.log(`${icon} ${result.name}: ${result.message}`)
})

const allPassed = results.every((r) => r.passed)
const passCount = results.filter((r) => r.passed).length

console.log(`\n📊 Results: ${passCount}/${results.length} checks passed\n`)

if (allPassed) {
  console.log("✨ All validations passed! Site is ready for deployment.\n")
  process.exit(0)
} else {
  console.log("⚠️ Some validations failed. Please fix the issues above.\n")
  process.exit(1)
}
