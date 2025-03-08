import { expect, test } from '@playwright/test';

[
    {
        fullName: 'Top judge 1',
        tagLine: 'Visionary Technologist and Thought Leader',
        profileUrl: '/judges/top-judge-1-00000000-0000-0000-0000-000000000004/',
    },
    {
        fullName: 'Top judge 2',
        tagLine: 'Dynamic PR Specialist and Communications Expert',
        profileUrl: '/judges/top-judge-2-00000000-0000-0000-0000-000000000008/',
    },
    {
        fullName: 'Top judge 3',
        tagLine: 'Innovative Tech Visionary and Mentor',
        profileUrl: '/judges/top-judge-3-00000000-0000-0000-0000-000000000002/',
    },
    {
        fullName: 'Top judge 4',
        tagLine: 'Pioneering Innovator in Tech Solutions',
        profileUrl: '/judges/top-judge-4-00000000-0000-0000-0000-000000000006/',
    },
].forEach(({ fullName, tagLine, profileUrl }) => {
    test(`Should provide link to page of featured judge ${fullName} on home page`, async ({ page }) => {
        await page.goto('/');

        const featuredjudgesSection = page.getByRole('region', { name: 'Featured judges' });
        const featuredjudgesList = featuredjudgesSection.getByRole('list', { name: 'Featured judges' });
        const featuredjudgeItem = featuredjudgesList.getByRole('listitem', { name: fullName });

        await expect(featuredjudgeItem.getByRole('heading', { name: fullName })).toBeVisible();
        await expect(featuredjudgeItem.getByText(tagLine)).toBeVisible();

        await featuredjudgeItem.getByRole('link', { name: fullName }).click();
        await expect(page).toHaveURL(profileUrl);
    });
});
