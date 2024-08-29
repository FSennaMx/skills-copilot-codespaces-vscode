function skillsMember()  {
    if (!member || !member.skills) {
        return "No skills available.";
    }

    return `Member: ${member.name}\nSkills: ${member.skills.join(', ')}`;
}