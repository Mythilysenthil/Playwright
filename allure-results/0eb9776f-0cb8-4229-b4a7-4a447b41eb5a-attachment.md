# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frame.test.ts >> Frame2 - Inner Frame
- Location: Demo_project\tests\frame.test.ts:15:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#firstFr').contentFrame().locator('iframe').contentFrame().locator('input[name=\'email\']')
Expected: visible
Error: strict mode violation: locator('iframe') resolved to 5 elements:
    1) <iframe src="/innerframe" title="Inner Frame" class="w-full h-[220px] block border-none"></iframe> aka locator('iframe[title="Inner Frame"]')
    2) <iframe vspace="0" hspace="0" tabindex="0" id="aswift_0" scrolling="no" name="aswift_0" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="1.y8wyfihtre5j" allow="attribution-reporting; run-ad-auction" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.g.doubleclick.net/pa…></iframe> aka locator('iframe[name="aswift_0"]')
    3) <iframe width="0" height="0" src="https://ep2.adtrafficquality.google/sodar/sodar2/255/runner.html"></iframe> aka locator('iframe').nth(2)
    4) <iframe width="0" height="0" src="https://www.google.com/recaptcha/api2/aframe"></iframe> aka locator('iframe').nth(3)
    5) <iframe id="google_esf" name="google_esf" src="https://googleads.g.doubleclick.net/pagead/html/r20260625/r20190131/zrt_lookup.html"></iframe> aka locator('iframe[name="google_esf"]')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#firstFr').contentFrame().locator('iframe').contentFrame().locator('input[name=\'email\']')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9] [cursor=pointer]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]:
              - text: Products
              - img [ref=e12]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]:
              - text: Grooming
              - img [ref=e17]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
          - link "Courses" [ref=e20] [cursor=pointer]:
            - /url: /courses
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32] [cursor=pointer]:
              - /url: /test
              - img [ref=e33]
              - generic [ref=e38]: Workspace
            - img [ref=e39]
            - generic [ref=e41]: Frame
          - heading "Frame" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]: Let's go for a frame practice 😉
            - iframe [active] [ref=e51]:
              - generic [ref=f1e1]:
                - generic [ref=f1e4]:
                  - heading "Enter Details" [level=1] [ref=f1e5]
                  - generic [ref=f1e6]:
                    - generic [ref=f1e7]:
                      - generic [ref=f1e8]: First Name
                      - textbox "Enter name" [ref=f1e9]: Mythily
                    - generic [ref=f1e10]:
                      - generic [ref=f1e11]: Last Name
                      - textbox "Enter email" [active] [ref=f1e12]: S
                  - paragraph [ref=f1e14]: You have entered Mythily S
                  - iframe [ref=f1e16]:
                    - generic [active] [ref=f2e1]:
                      - generic [ref=f2e5]:
                        - generic [ref=f2e6]: Email
                        - textbox "Enter email" [ref=f2e7]
                      - insertion [ref=f2e9]:
                        - generic [ref=f2e12]:
                          - heading "These are topics related to the article that might interest you" [level=2] [ref=f2e14]: Discover more
                          - link "Web Browsers" [ref=f2e15] [cursor=pointer]:
                            - generic "Web Browsers" [ref=f2e16]
                            - img [ref=f2e18]
                          - link "Playwright Quiz Application" [ref=f2e20] [cursor=pointer]:
                            - generic "Playwright Quiz Application" [ref=f2e21]
                            - img [ref=f2e23]
                - insertion [ref=f1e18]:
                  - generic [ref=f1e21]:
                    - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e23]: Discover more
                    - link "Educational Course Development" [ref=f1e24] [cursor=pointer]:
                      - generic "Educational Course Development" [ref=f1e25]
                      - img [ref=f1e27]
                    - link "Educational Resources" [ref=f1e29] [cursor=pointer]:
                      - generic "Educational Resources" [ref=f1e30]
                      - img [ref=f1e32]
                    - link "Koushik Chatterjee Consulting" [ref=f1e34] [cursor=pointer]:
                      - generic "Koushik Chatterjee Consulting" [ref=f1e35]
                      - img [ref=f1e37]
          - generic [ref=e53]:
            - generic [ref=e54]:
              - img [ref=e55]
              - heading "Learning Points" [level=3] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - img [ref=e61]
                - generic [ref=e64]: Target Locator
              - listitem [ref=e65]:
                - img [ref=e66]
                - generic [ref=e69]:
                  - text: switchTo()
                  - link "Machine Learning & Artificial Intelligence" [ref=e70] [cursor=pointer]:
                    - img [ref=e72]
                    - text: Machine Learning & Artificial Intelligence
              - listitem [ref=e74]:
                - img [ref=e75]
                - generic [ref=e78]: defaultContent()
              - listitem [ref=e79]:
                - img [ref=e80]
                - generic [ref=e83]: parentFrame()
              - listitem [ref=e84]:
                - img [ref=e85]
                - generic [ref=e88]: Overloading concept - JAVA
            - generic [ref=e89]:
              - link "Watch Tutorial" [ref=e90] [cursor=pointer]:
                - /url: /video/frame
                - img [ref=e91]
                - generic [ref=e93]: Watch Tutorial
              - generic [ref=e94]:
                - text: "Practice ID:"
                - code [ref=e95]: frame
          - generic [ref=e96]:
            - generic:
              - generic:
                - insertion
        - generic:
          - generic:
            - generic:
              - insertion
    - contentinfo [ref=e97]:
      - generic [ref=e98]:
        - paragraph [ref=e99]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e100] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e101] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e102]:
          - link "GitHub" [ref=e103] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e104]
          - link "YouTube" [ref=e107] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e108]
          - link "LinkedIn" [ref=e111] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e112]
          - link "Contact" [ref=e117] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e118] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e120]:
    - generic [ref=e123]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e125]: Discover more
      - link "Software" [ref=e126] [cursor=pointer]:
        - generic "Software" [ref=e127]
        - img [ref=e129]
      - link "Open Source" [ref=e131] [cursor=pointer]:
        - generic "Open Source" [ref=e132]
        - img [ref=e134]
      - link "Learning Resources Library" [ref=e136] [cursor=pointer]:
        - generic "Learning Resources Library" [ref=e137]
        - img [ref=e139]
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | 
  3  | test('Frame Test',async({page})=>{
  4  |     await page.goto('https://letcode.in/frame');
  5  |     const allframes=page.frames();
  6  |     console.log("No of Frames:" + allframes.length);
  7  |     const myframe=page.frame("firstFr");
  8  |     //? checking condition null
  9  |     await myframe?.fill("input[name='fname']","Mythily");
  10 |     await myframe?.fill("input[name='lname']","S");
  11 |     const frame=page.frameLocator('iframe[name="firstFr"]');
  12 |     await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText("Mythily");
  13 | })
  14 | 
  15 | test("Frame2 - Inner Frame", async ({ page }) => {
  16 |   await page.goto("https://letcode.in/frame");
  17 | 
  18 |   const firstFrame = page.frameLocator("#firstFr");
  19 | 
  20 |   await firstFrame.locator("input[name='fname']").fill("Mythily");
  21 |   await firstFrame.locator("input[name='lname']").fill("S");
  22 | 
  23 |   const innerFrame = firstFrame.frameLocator("iframe");
  24 | 
  25 |   await expect(
  26 |     innerFrame.locator("input[name='email']")
> 27 |   ).toBeVisible();
     |     ^ Error: expect(locator).toBeVisible() failed
  28 | 
  29 |   await innerFrame.locator("input[name='email']").fill("mythily@gmail.com");
  30 | });
```