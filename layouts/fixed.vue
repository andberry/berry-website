<template>
    <div id="page">
        <PageHeader />
        <main id="main" class="h-screen flex items-center px-4 bg-black text-graylight">
            <div class="w-full">
                <Nuxt />
            </div>
        </main>
        <PageFooter
            :isSticky="true"
        />
    </div>
</template>
