({
    navigate : function(component, event, helper) {
        var navigateEvent = $A.get("e.force:navigateToComponent");
        console.log('navigateEvent==='+navigateEvent);
        navigateEvent.setParams({
            componentDef: "c:TesrgetComponent_test"
            //You can pass attribute value from Component1 to Component2
            //componentAttributes :{ }
        });
        navigateEvent.fire();
    }
})
