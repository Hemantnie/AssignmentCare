# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

###### Ticket 1 -
- Add a column in **Agents table** to store the custom Id provided by the Facilities.
- Run alter table command on the table, Make the default value as Null
- Make sure that it does not break the existing features and constraints on the table.
- time/effort estimates : **0.5hr**

###### Ticket 2 -

- Modify getShiftsByFacility API to include the newly added column of custom field in Agents table.
- Implementation details -  getShiftsByFacility takes the Facility's id and return the Shift details along with some Agent information. This is done by querying the Facilities table and joining it with the Agents table. 
- Modify the join query to include the custom field from Agents table.
- Add/Modify  test cases
- time/effort estimates : **1hr**

###### Ticket 3 -

- Modify generateReport API to use custom Agent Id.
- While generating the report we fetch the shift information using the getShiftsByFacility. Use the Custom id for an Agent if present to create the report or fall back  to the database ids for the employees.
- Add test case to test the flow of using custom ids for agents in reports
- time/effort estimates : **1hr**