<template>
    <div>
        <Navbar />
        <h1>Account Settings</h1>
        <div class="card">
        <AccountCard>
            <h2>User Details</h2>
            <h3>General Information</h3>

            <div class="float label">First Name</div>
            <div class="float"><TextField /></div>
            <div class="clearfix"></div>

            <div class="float label">Last Name</div>
            <div class="float"><TextField /></div>
            <div class="clearfix"></div>

            <h3>Location</h3>

            <div class="float label">Postcode</div>
            <div class="float"><TextField /></div>
            <div class="clearfix"></div>

            <div class="float label">Street</div>
            <div class="float"><TextField /></div>
            <div class="clearfix"></div>

            <div class="float label">County</div>
            <div class="float"><TextField /></div>
            <div class="clearfix"></div>

            <div class="float label">Country</div>
            <div class="float"><TextField /></div>
            <div class="clearfix"></div>
            <Button />
        </AccountCard>
        </div>

        <div class="card">
        <AccountCard>
            <h2>Avatar</h2>
            <div class="center">
                <ProfilePic />
                <Button />
            </div>
        </AccountCard>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
h1 {
    padding-top: 30px;
    padding-left: 120px;
    font-size: 30px;
    font-weight: bold;
}

h2 {
    padding: 30px;
    font-size: 25px;
    font-weight: bold;
}

h3 {
    font-size: 15px;
    padding-left: 30px;
    font-weight: bold;
}

.card {
    width: 900px;
    padding: 30px;
    padding-left: 120px;
    padding-right: 120px;
    float: left;
    display: flex;
    justify-content: space-between;
}

.float {
    float: left;
}

.label {
    padding: 30px;
    font-size: 15px;
}

.clearfix{
    clear:both
}

// .center {
//     margin-left: 50%;
// }
</style>